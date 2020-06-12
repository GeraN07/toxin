import * as $ from 'jquery'
import Post from '@models/post'
// import json from './assets/json.json'
// import xml  from './assets/i_1cen_6.xml'
import csv from '@/assets/TemplateimportOU.csv'
import WebpackLogo from '@/assets/webpack-logo'
import './index.scss'
const post = new Post('Webpack Post Title', WebpackLogo)
$('pre').addClass('code').html(post.toString())
// console.log('JSON:', json)
// console.log('XML:',xml)
console.log('CSV', csv)