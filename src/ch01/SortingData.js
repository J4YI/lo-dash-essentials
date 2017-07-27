const _ = require('lodash');

class SortingData {
  static snippetSortBy() {

    const result = _.sortBy('cba').join('');

    return result;
  }

  static snippetSortByWithCallback() {
    const collection = [
      {
        name: 'Moe'
      }, {
        name: 'Seymour'
      }, {
        name: 'Harold'
      }, {
        name: 'Willie'
      }
    ];

    // _.sortBy(collection, 'name');
    return _.sortBy(collection, (item) => {
      return item.name;
    });

  }

  static snippetSortByMultiplePropertyName() {
    const collection = [
      {
        name: 'Clancy',
        age: 43
      }, {
        name: 'Edna',
        age: 32
      }, {
        name: 'Lisa',
        age: 10
      }, {
        name: 'Philip',
        age: 10
      }
    ];

    return _.sortBy(collection, ['age', 'name']);
  }

  static snippetMaintainingSortOrder() {
    const collection = ['Carl', 'Gary', 'Luigi', 'Otto'];
    const name = 'Luke';

    const idx = _.sortedIndex(collection, name);
    collection.splice(idx, 0, name);

    return collection;
  }

  static snippetFilteringCollectionsWhere() {
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

    // Obsolete
    const result = _.where(collection, {
      age: 32,
      gender: 'f'
    });

    return result;
  }

  static snippetFilteringCollectionsFilter() {
    const collection = [
      {
        name: 'Sean',
        enabled: false
      }, {
        name: 'Joel',
        enabled: true
      }, {
        name: 'Sue',
        enabled: false
      }, {
        name: 'Jackie',
        enabled: true
      }
    ];

    const result = _.filter(collection, 'enabled');

    return result;
  }

  static snippetFilteringCollectionsFilterCallback() {
    const collection = [
      {
        type: 'shirt',
        size: 'L'
      }, {
        type: 'pants',
        size: 'S'
      }, {
        type: 'shirt',
        size: 'XL'
      }, {
        type: 'pants',
        size: 'M'
      }
    ];

    const result = _.filter(collection, (item) => {
      return item.size === 'L' || item.size === 'M';
    });

    return result;
  }

  static snippetFilteringCollectionsReject() {
    const collection = [
      {
        name: 'Ryan',
        enabled: true
      }, {
        name: 'Megan',
        enabled: false
      }, {
        name: 'Trevor',
        enabled: false
      }, {
        name: 'Patricia',
        enabled: true
      }
    ];

    const result = _.reject(collection, {enabled: true});

    return result;
  }

  static snippetFindingItemsInCollectionsFind() {
    const collection = [
      {
        name: 'Derek',
        age: 37
      }, {
        name: 'Caroline',
        age: 35
      }, {
        name: 'Malcolm',
        age: 37
      }, {
        name: 'Hazel',
        age: 62
      }
    ];

    const result = _.find(collection, {age: 37});

    return result;
  }

  static snippetFindingItemsInCollectionsFindLatast() {
    const collection = [
      {
        name: 'Derek',
        age: 37
      }, {
        name: 'Caroline',
        age: 35
      }, {
        name: 'Malcolm',
        age: 37
      }, {
        name: 'Hazel',
        age: 62
      }
    ];

    const result = _.findLast(collection, {age: 37});

    return result;
  }
}

module.exports = SortingData;
