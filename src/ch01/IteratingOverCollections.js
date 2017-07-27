const _ = require('lodash');

class IteratingOverCollections {

  static snippetForEach() {
    const collection = ['Lois', 'Kathryn', 'Craig', 'Ryan'];

    _.forEach(collection, (name) => {
      console.log(name);
    });
  }

  static ForEachIndex() {
    const collection = ['Timothy', 'Kelly', 'Julia', 'Leon'];
    _.forEach(collection, (name, index) => {
      if (name === 'Kelly') {
        console.log(`Kelly Index: ${index}`);
        return false;
      }

      return true;
    });

    return true;
  }

  static snippetForEachright() {
    const collection = ['Carl', 'Lisa', 'Raymond', 'Rita'];

    const result = [];

    _.forEachRight(collection, (name) => {
      result.push(name);
    });

    return result;
  }

  static snippetFilteringCollections() {
    const collection = [
      {
        name: 'Moe',
        age: 47,
        gender: 'm'
      }, {
        name: 'Sarah',
        age: 32,
        gender: 'f'
      }, {
        name: 'Melissa',
        age: 32,
        gender: 'f'
      }, {
        name: 'Dave',
        age: 32,
        gender: 'm'
      }
    ];
  }
}
module.exports = IteratingOverCollections;
