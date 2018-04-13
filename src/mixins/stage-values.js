import { clone } from 'lodash'

const REPO_NAME = '__REPO__'

export default {
  beforeCreate() {
    this[REPO_NAME] = {
      tail: Object.create(null),
      head: Object.create(null)
    }
  },

  methods: {
    stage(propName, value) {
      const { tail, head } = this[REPO_NAME]
      value = clone(value)
      if (!tail[propName]) {
        tail[propName] = value
      }
      head[propName] = value
    },
    reset(propName) {
      const { tail, head } = this[REPO_NAME]
      head[propName] = tail[propName]
    },
    commit(propName) {
      const { tail, head } = this[REPO_NAME]
      if (propName in head) {
        this[propName] = head[propName]
        tail[propName] = head[propName]
      }
    }
  }
}
