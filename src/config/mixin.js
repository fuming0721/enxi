import Vue from 'vue'
const destroy = (to, from, next, that) => {
  if (from && from.meta.rank && to.meta.rank && from.meta.rank > to.meta.rank) {
    if (that.$vnode && that.$vnode.data.keepAlive) {
      if (that.$vnode.parent && that.$vnode.parent.componentInstance && that.$vnode.parent.componentInstance.cache) {
        if (that.$vnode.componentOptions) {
          var key = that.$vnode.key == null
            ? that.$vnode.componentOptions.Ctor.cid + (that.$vnode.componentOptions.tag ? `::${that.$vnode.componentOptions.tag}` : '')
            : that.$vnode.key
          var cache = that.$vnode.parent.componentInstance.cache
          var keys = that.$vnode.parent.componentInstance.keys
          if (cache[key]) {
            if (keys.length) {
              var index = keys.indexOf(key)
              if (index > -1) {
                keys.splice(index, 1)
              }
            }
            delete cache[key]
          }
        }
      }
    }
    that.$destroy()
  }
  next()
}
Vue.mixin({
  beforeRouteLeave (to, from, next) {
    from.meta.is_form ? this.routerChange(to, from, next, destroy) : destroy(to, from, next, this)
  }
})
