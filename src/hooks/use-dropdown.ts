import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
const useDropdown = (options) => {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    items: [],
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText(itemCount) {
      const parts = [];
      for (const item of this.items) {
        if (itemCount[item.id] > 0) {
          parts.push(`${itemCount[item.id]} ${item.label}`);
        }
      }
      return parts.join(', ');
    },
  };

  const settings = { ...defaults, ...options };

  const [itemCount, setItemCount] = useState(() => {
    const initialCounts = {};
    settings.items.forEach((item) => {
      initialCounts[item.id] = item.minCount || 0;
    });
    return initialCounts;
  });

  const [totalItems, setTotalItems] = useState(() => {
    return (
      settings.items.reduce((sum, item) => sum + (item.minCount || 0), 0) -
      (itemCount['infant'] || 0)
    );
  });

  const [selectionText, setSelectionText] = useState(settings.selectionText);
  const [hasSelection, setHasSelection] = useState(totalItems > 0);

  const updateDisplay = useCallback(() => {
    if (totalItems > 0) {
      setSelectionText(settings.setSelectionText(itemCount));
      setHasSelection(true);
    } else {
      setSelectionText(settings.selectionText);
      setHasSelection(false);
    }
  }, [itemCount, totalItems, settings]);

  const handleDecrement = useCallback(
    (id) => {
      if (
        settings.beforeDecrement(id, itemCount) &&
        totalItems > settings.minItems &&
        itemCount[id] > settings.items.find((item) => item.id === id).minCount
      ) {
        setItemCount((prev) => {
          const newCount = { ...prev, [id]: prev[id] - 1 };
          setTotalItems(
            Object.values(newCount).reduce((a, b) => a + b, 0) -
              (newCount['infant'] || 0)
          );
          settings.onChange(id, newCount[id], totalItems);
          return newCount;
        });
      }
    },
    [itemCount, totalItems, settings]
  );

  const handleIncrement = useCallback(
    (id) => {
      if (
        settings.beforeIncrement(id, itemCount) &&
        totalItems < settings.maxItems &&
        itemCount[id] < settings.items.find((item) => item.id === id).maxCount
      ) {
        setItemCount((prev) => {
          const newCount = { ...prev, [id]: prev[id] + 1 };
          setTotalItems(
            Object.values(newCount).reduce((a, b) => a + b, 0) -
              (newCount['infant'] || 0)
          );
          settings.onChange(id, newCount[id], totalItems);
          return newCount;
        });
      }
    },
    [itemCount, totalItems, settings]
  );

  useEffect(() => {
    updateDisplay();
  }, [itemCount, totalItems, updateDisplay]);

  const resetCounts = useCallback(() => {
    const resetItemCount = settings.items.reduce((acc, item) => {
      acc[item.id] = item.minCount || 0;
      return acc;
    }, {});
    setItemCount(resetItemCount);
    setTotalItems(
      Object.values(resetItemCount).reduce((a, b) => a + b, 0) -
        (resetItemCount['infant'] || 0)
    );
  }, [settings.items]);

  const bedrooms = useSelector(
    (state: { dates: Date[] }) => state.filter.bedroomCount
  );
  const beds = useSelector(
    (state: { dates: Date[] }) => state.filter.bedsCount
  );

  const bathRooms = useSelector(
    (state: { dates: Date[] }) => state.filter.bathRoomsCount
  );

  const adults = useSelector(
    (state: { dates: Date[] }) => state.filter.adultCount
  );
  const child = useSelector(
    (state: { dates: Date[] }) => state.filter.childCount
  );
  const infant = useSelector(
    (state: { dates: Date[] }) => state.filter.infantCount
  );

  useEffect(() => {
    if (settings.items[0].id == 'bedrooms') {
      itemCount['bedrooms'] = bedrooms;
      itemCount['beds'] = beds;
      itemCount['bathrooms'] = bathRooms;
      setTotalItems(bedrooms + beds + bathRooms);
    } else {
      itemCount['adult'] = adults;
      itemCount['child'] = child;
      itemCount['infant'] = infant;
      setTotalItems(adults + child);
    }
  }, []);

  return {
    itemCount,
    totalItems,
    selectionText,
    handleDecrement,
    handleIncrement,
    resetCounts,
    hasSelection,
    setHasSelection,
  };
};

export default useDropdown;
