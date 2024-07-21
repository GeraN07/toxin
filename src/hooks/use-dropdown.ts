/* eslint-disable */
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  getAdults,
  getBathRooms,
  getBedrooms,
  getBeds,
  getChild,
  getInfant,
} from '../store/selectors';
import { ItemCount } from '../types/types';

interface Item {
  id: string;
  label: string;
  minCount?: number;
  maxCount?: number;
}

interface DropdownSettings {
  maxItems: number;
  minItems: number;
  selectionText: string;
  textPlural: string;
  items: Item[];
  onChange: (id: string, newCount: number, totalItems: number) => void;
  beforeDecrement: (id: string, itemCount: ItemCount) => boolean;
  beforeIncrement: (id: string, itemCount: ItemCount) => boolean;
  setSelectionText: (itemCount: ItemCount) => string;
}

interface UseDropdownHookResult {
  itemCount: ItemCount;
  totalItems: number;
  selectionText: string;
  handleDecrement: (id: string) => void;
  handleIncrement: (id: string) => void;
  resetCounts: () => void;
  hasSelection: boolean;
}

const useDropdown = (
  options: Partial<DropdownSettings>
): UseDropdownHookResult => {
  const defaults: DropdownSettings = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    items: [],
    onChange: (id: string, newCount: number, totalItems: number) => {
      console.log(`Item changed: ${id}, New count: ${newCount}, Total items: ${totalItems}`);
    },
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText(itemCount: ItemCount) {
      const parts: string[] = [];
      for (const item of this.items) {
        const count = itemCount[item.id] || 0;
        if (count > 0) {
          parts.push(`${count} ${item.label}`);
        }
      }
      return parts.join(', ');
    },
  };

  const settings: DropdownSettings = {
    ...defaults,
    ...options,
  };

  const [itemCount, setItemCount] = useState<ItemCount>(() => {
    const initialCounts: ItemCount = {};
    settings.items.forEach((item) => {
      initialCounts[item.id] = item.minCount || 0;
    });
    return initialCounts;
  });

  const [totalItems, setTotalItems] = useState<number>(
    () =>
      settings.items.reduce((sum, item) => sum + (item.minCount || 0), 0) -
      (itemCount['infant'] || 0)
  );

  const [selectionText, setSelectionText] = useState<string>(
    settings.selectionText
  );

  const [hasSelection, setHasSelection] = useState<boolean>(totalItems > 0);

  const updateDisplay = useCallback(() => {
    if (totalItems > 0) {
      setSelectionText(settings.setSelectionText(itemCount));
      setHasSelection(true);
    } else {
      setSelectionText(settings.selectionText);
      setHasSelection(false);
    }
  }, [itemCount, totalItems, settings]);

  const handleIncrement = useCallback(
    (id: string) => {
      const currentItemCount = itemCount[id] || 0;
  
      if (
        settings.beforeIncrement(id, itemCount) &&
        totalItems < settings.maxItems &&
        currentItemCount < (settings.items.find((item) => item.id === id)?.maxCount || Infinity)
      ) {
        setItemCount((prev: Partial<Record<string, number>>) => {
          const currentCount = prev[id] || 0;
          const newCount: Record<string, number> = { ...prev, [id]: currentCount + 1 } as Record<string, number>;
  
          const totalItemCount = Object.values(newCount).reduce((a, b) => a + b, 0) - (newCount['infant'] || 0);
  
          settings.onChange(id, newCount[id], totalItemCount);
          setTotalItems(totalItemCount);
  
          return newCount;
        });
      }
    },
    [itemCount, totalItems, settings]
  );
  
  const handleDecrement = useCallback(
    (id: string) => {
      const currentItemCount = itemCount[id] || 0;
  
      if (
        settings.beforeDecrement(id, itemCount) &&
        totalItems > settings.minItems && 
        currentItemCount > (settings.items.find((item) => item.id === id)?.minCount || 0)
      ) {
        setItemCount((prev: Partial<Record<string, number>>) => {
          const currentCount = prev[id] || 0;
          const newCount: Record<string, number> = { ...prev, [id]: currentCount - 1 } as Record<string, number>;
  
          const totalItemCount = Object.values(newCount).reduce((a, b) => a + b, 0) - (newCount['infant'] || 0);
  
          settings.onChange(id, newCount[id], totalItemCount);
          setTotalItems(totalItemCount);
  
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
    const resetItemCount: Record<string, number> = settings.items.reduce((acc, item) => {
      acc[item.id] = item.minCount || 0;
      return acc;
    }, {} as Record<string, number>);
  
    setItemCount(resetItemCount);
    setTotalItems(
      Object.values(resetItemCount).reduce((a, b) => a + b, 0) - (resetItemCount['infant'] || 0)
    );
  }, [settings.items]);
  

  const bedrooms = useSelector(getBedrooms);
  const beds = useSelector(getBeds);
  const bathRooms = useSelector(getBathRooms);
  const adults = useSelector(getAdults);
  const child = useSelector(getChild);
  const infant = useSelector(getInfant);

  useEffect(() => {
    if (settings.items[0]?.id === 'bedrooms') {
      setItemCount((prev) => ({
        ...prev,
        bedrooms,
        beds,
        bathrooms: bathRooms,
      }));
      setTotalItems(bedrooms + beds + bathRooms);
    } else {
      setItemCount((prev) => ({
        ...prev,
        adult: adults,
        child,
        infant,
      }));
      setTotalItems(adults + child);
    }
  }, [adults, bathRooms, bedrooms, beds, child, infant, settings.items]);

  return {
    itemCount,
    totalItems,
    selectionText,
    handleDecrement,
    handleIncrement,
    resetCounts,
    hasSelection,
  };
};

export default useDropdown;
/* eslint-enable */
