/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

import { Configuration, FieldConfiguration } from './configuration';
import { TestDoc } from './test/test-doc';


describe(Configuration.name, function() {
  it('constructor test 1', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      fields: { 'title': { boost: 2 } },
      bool: 'OR'
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 2,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('constructor test 2', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3 }, 'body': { 'boost': 2 } }, 'bool': 'OR'
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'OR',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('constructor without user config', () => {
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 1,
          bool: 'OR',
          expand: false
        },
        body: {
          boost: 1,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], null).get();
    expect(config).toEqual(target);
  });

  it('construct with user config for bool overwritten by field config', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3, 'bool': 'AND' }, 'body': { 'boost': 2 } }, 'bool': 'OR'
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'AND',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config without field boost', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'bool': 'AND' }, 'body': {} }, 'bool': 'OR'
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 1,
          bool: 'AND',
          expand: false
        },
        body: {
          boost: 1,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config without bool setting', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 2 }, 'body': {} }
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 2,
          bool: 'OR',
          expand: false
        },
        body: {
          boost: 1,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config, search fields is null', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 2 }, 'body': {} }
    };
    try {
      new Configuration<TestDoc>([], userConfig).get();
      fail();
    } catch (e) {
    }
  });

  it('construct with user config, global expand config', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3, 'bool': 'AND' }, 'body': { 'boost': 2 } }, 'bool': 'OR', 'expand': true
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'AND',
          expand: true
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: true
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });


  it('construct with user config, global expand config overwrite by local config', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3, 'bool': 'AND', 'expand': false }, 'body': { 'boost': 2 } }, 'bool': 'OR', 'expand': true
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'AND',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: true
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config, global expand config overwrite by local config 2', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3, 'bool': 'AND', 'expand': false }, 'body': { 'boost': 2, 'expand': true } },
      'bool': 'OR',
      'expand': false
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'AND',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: true
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config, global expand config overwrite by local config 3', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 3, 'bool': 'AND', 'expand': false }, 'body': { 'boost': 2, 'expand': false } },
      'bool': 'OR',
      'expand': false
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 3,
          bool: 'AND',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });

  it('construct with user config, boost of 0 shouldn\'t be overwritten', () => {
    const userConfig: FieldConfiguration<TestDoc> = {
      'fields': { 'title': { 'boost': 0 }, 'body': { 'boost': 2 } }
    };
    const target: FieldConfiguration<TestDoc> = {
      fields: {
        title: {
          boost: 0,
          bool: 'OR',
          expand: false
        },
        body: {
          boost: 2,
          bool: 'OR',
          expand: false
        }
      }
    };

    const config = new Configuration<TestDoc>(['title', 'body'], userConfig).get();
    expect(config).toEqual(target);
  });
});
