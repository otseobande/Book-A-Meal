const addTimeStamps = Symbol('addTimeStamps');

class DummyModel {
  constructor(data) {
    if (Array.isArray(data)) {
      this.data = data;
      this[addTimeStamps]();
    } else {
      throw new TypeError('Dummy Model constructor expects an array arg');
    }
  }

  find(callback) {
    return this.data.find(callback);
  }

  filter(callback) {
    return this.data.filter(callback);
  }
  delete(callback) {
    let deleted = false;
    this.data.every((item, index) => {
      const condition = callback(item);
      if (condition) {
        this.data.splice(index, 1);
        deleted = true;
      }

      return !condition;
    });

    return deleted;
  }

  create(data) {
    this.data.push({
      ...data,
      id: this.data[this.data.length - 1].id + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return this.data[this.data.length - 1];
  }

  update(updateData, callback) {
    if (typeof (updateData) !== 'object') {
      throw new TypeError('Update data is expected to be an object');
    }

    let updated = {};
    this.data.every((item, index) => {
      const condition = callback(item);
      if (condition) {
        const currentData = this.data[index];
        this.data[index] = {
          ...currentData,
          ...updateData,
          updatedAt: new Date()
        };
        updated = this.data[index];
      }

      return !condition;
    });

    return updated;
  }

  [addTimeStamps]() {
    this.data = this.data.map((item) => {
      const updatedItem = {
        ...item,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      return updatedItem;
    });
  }
}

export default DummyModel;
