import { observable, action, computed } from 'mobx';

class CounterStore {
  @observable count = 0;

  @computed
  get isDisbaled() {
    return this.count <= 0;
  }

  @action
  increase() {
    this.count += 1;
  }

  @action
  decrease() {
    this.count -= 1;
  }
}

export default new CounterStore();
