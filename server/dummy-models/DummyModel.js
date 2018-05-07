const addTimeStamps = Symbol('addTimeStamps');

/**
 * @exports
 * @class  DummyModel
 */
class DummyModel {
  /**
   * Accepts an array of objects
   * @param  {Array} data - Array of objects
   */
  constructor(data) {
    if (Array.isArray(data)) {
      this.data = data;
      this[addTimeStamps]();
    } else {
      throw new TypeError('Dummy Model constructor expects an array arg');
    }
  }

  /**
   * Based on Array.prototype.find
   * @param  {Function} callback
   * @return {object|undefined} - Found Item
   */
  find(callback) {
    return this.data.find(callback);
  }

  /**
   * Based on Array.prototype.filter
   * @param  {Function} callback
   * @return {object|undefined} - Found Items
   */
  filter(callback) {
    return this.data.filter(callback);
  }

  /**
   * Deletes an Item
   * @param  {Function} callback - function returning Boolean
   * @return {Boolean} - status of operation
   */
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

  /**
   * Creates a new entry
   * @param  {object} data
   * @return {object} - newly created object
   */
  create(data) {
    this.data.push({
      ...data,
      id: this.data[this.data.length - 1].id + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return this.data[this.data.length - 1];
  }


  /**
   * Updates an existing item
   * @param  {object} updateData
   * @param  {Function} callback - conditional callback
   * @return {Boolean} - Status of operation
   */
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

  /**
   * Adds timestamps to array items
   * @return {object} - updated items
   */
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
