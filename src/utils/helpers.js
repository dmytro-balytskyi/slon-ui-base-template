/* 
  Дана фукнція допомагає сформувати URL адреси на різноманітні статичні
  файли ресурсів з врахуванням середовища збірки: local, storybook, deploy, 
  deploy storybook.
*/

export function getResourceUrl() {
  if (window.__STORYBOOK_PREVIEW__ || window.location.href.includes('iframe.html')) {
    return `${window.location.protocol}//${import.meta.env.VITE_STORYBOOK_RESOURCE_URL}`
  }
  
  return `${window.location.protocol}//${import.meta.env.VITE_RESOURCE_URL}`
}