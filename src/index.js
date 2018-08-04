import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "item" ]

  connect() {
    this.itemTargets.forEach((el, index) => {
      if (this.ancestor_ids.includes(el.dataset.pageId))
        el.classList.add('active')

      if (this.current_page_id == el.dataset.pageId) 
        el.classList.add('active', 'current')
    })
  }

  get current_page_id() {
    return document.body.dataset.currentPageId
  }

  get ancestor_ids() {
    return document.body.dataset.ancestorIds.split('-')
  }

}