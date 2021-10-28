// import { request } from '@/api'
// import api from '@/api/api'

const SETDISCOUNTGOODS = 'SETDISCOUNTGOODS'// 保存优惠商品信息
const SETUSERSINFO = 'SETUSERSINFO'// 保存用户信息
const SETNOTEINFO = 'SETNOTEINFO'// 保存note信息
const SETNOTECOMMENTINFO = 'SETNOTECOMMENTINFO' // 保存笔记评论信息
const SETARTICLEINFO = 'SETARTICLEINFO'// 保存文章（测评）信息
const SETARTICLECOMMENTINFO = 'SETARTICLECOMMENTINFO' // 保存文章测评评论信息
const SETGOODSINFO = 'SETGOODSINFO' // 保存商城商品信息

const state = {
  discountGoodsInfo: {},
  usersInfo: {},
  noteInfo: {},
  noteCommentInfo: {},
  articleInfo: {},
  articleCommentInfo: {},
  goodsInfo: {}
}

const getters = {
  discountGoodsInfo: state => id => state.discountGoodsInfo[id],
  usersInfo: state => id => state.usersInfo[id],
  noteInfo: state => noteId => state.noteInfo[noteId],
  noteCommentInfo: state => id => state.noteCommentInfo[id],
  articleInfo: state => id => state.articleInfo[id],
  articleCommentInfo: state => id => state.articleCommentInfo[id],
  goodsInfo: state => id => state.goodsInfo[id]
}

const mutations = {
  [SETDISCOUNTGOODS] (state, info) {
    state.discountGoodsInfo[info.id] = Object.assign({}, state.discountGoodsInfo[info.id], info)
    state.discountGoodsInfo = Object.assign({}, state.discountGoodsInfo, state.discountGoodsInfo)
  },
  [SETUSERSINFO] (state, users) {
    state.usersInfo[users.id] = Object.assign({}, state.usersInfo[users.id], users)
    state.usersInfo = Object.assign({}, state.usersInfo, state.usersInfo)
  },
  [SETNOTEINFO] (state, info) {
    state.noteInfo[info.id] = Object.assign({}, state.noteInfo[info.id], info)
    state.noteInfo = Object.assign({}, state.noteInfo, state.noteInfo)
  },
  [SETNOTECOMMENTINFO] (state, comment) {
    state.noteCommentInfo[comment.id] = Object.assign({}, state.noteCommentInfo[comment.id], comment)
    state.noteCommentInfo = Object.assign({}, state.noteCommentInfo, state.noteCommentInfo)
  },
  [SETARTICLEINFO] (state, info) {
    state.articleInfo[info.id] = Object.assign({}, state.articleInfo[info.id], info)
    state.articleInfo = Object.assign({}, state.articleInfo, state.articleInfo)
  },
  [SETARTICLECOMMENTINFO] (state, comment) {
    state.articleCommentInfo[comment.id] = Object.assign({}, state.articleCommentInfo[comment.id], comment)
    state.articleCommentInfo = Object.assign({}, state.articleCommentInfo, state.articleCommentInfo)
  },
  [SETGOODSINFO] (state, info) {
    state.goodsInfo[info.id] = Object.assign({}, state.goodsInfo[info.id], info)
    state.goodsInfo = Object.assign({}, state.goodsInfo, state.goodsInfo)
  }
}

const actions = {
  setDiscountGoodsInfo ({ commit }, info) {
    commit(SETDISCOUNTGOODS, info)
  },
  setUsersInfo ({ commit }, users) {
    commit(SETUSERSINFO, users)
  },
  setNoteInfo ({ commit }, info) {
    commit(SETNOTEINFO, info)
  },
  setNoteCommentInfo ({ commit }, comment) {
    commit(SETNOTECOMMENTINFO, comment)
  },
  setArticleInfo ({ commit }, info) {
    commit(SETARTICLEINFO, info)
  },
  setArticleCommentInfo ({ commit }, comment) {
    commit(SETARTICLECOMMENTINFO, comment)
  },
  setGoodsInfo ({ commit }, info) {
    commit(SETGOODSINFO, info)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
