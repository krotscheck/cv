/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */

/**
 * Configuration properties for individual fields.
 */
export interface FieldConfiguration<T> {

  boost?: number;

  bool?: 'AND' | 'OR';

  expand?: boolean;

  fields?: { [K in keyof T]?: FieldConfiguration<T> };
}

/**
 * Configuration is used to analyze the user search configuration.
 *
 * By Configuration user could set query-time boosting, boolean model in each field.
 *
 * Currently configuration supports:
 * 1. query-time boosting, user could set how to boost each field.
 * 2. boolean model chosing, user could choose which boolean model to use for each field.
 * 3. token expansion, user could set token expand to True to improve Recall. Default is False.
 *
 * Query time boosting must be configured by field category, "boolean" model could be configured
 * by both field category or globally as the following example. Field configuration for "boolean"
 * will overwrite global configuration.
 * Token expand could be configured both by field category or golbally. Local field configuration will
 * overwrite global configuration.
 *
 * configuration example:
 * {
 *   fields:{
 *     title: {boost: 2},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * "bool" field configuration overwrite global configuration example:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND"},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * "expand" example:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND"},
 *     body: {boost: 1}
 *   },
 *   bool: "OR",
 *   expand: true
 * }
 *
 * "expand" example for field category:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND", expand: true},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * setting the boost to 0 ignores the field (this will only search the title):
 * {
 *   fields:{
 *     title: {boost: 1},
 *     body: {boost: 0}
 *   }
 * }
 *
 * then, user could search with configuration to do query-time boosting.
 * idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
 */
export class Configuration<T> {

  /**
   * Internal index configuration.
   */
  private readonly config: FieldConfiguration<T> = {};

  /**
   * Constructor, create a new instance using either a list of fields to index, or an explicit field configuration.
   */
  constructor(fields: (keyof T)[], config?: FieldConfiguration<T>) {
    if (!fields || fields.length === 0) {
      throw new Error('fields should not be empty');
    }

    if (!config) {
      this.buildDefaultConfig(fields);
    } else {
      this.buildUserConfig(fields, config);
    }
  }

  /**
   * get current user configuration
   */
  public get() {
    return this.config;
  };

  /**
   * Build default search configuration.
   */
  private buildDefaultConfig(fields: (keyof T)[]) {
    for (let field of fields) {

      if (!this.config.fields) {
        this.config.fields = {};
      }

      this.config.fields[field] = {
        boost: 1,
        bool: 'OR',
        expand: false
      };
    }
  };

  /**
   * Build a normalized configuration from the provided fields and config elements.
   */
  private buildUserConfig(fields: (keyof T)[], config: FieldConfiguration<T>) {
    let global_bool = config?.bool || 'OR';
    let global_expand = config?.expand || false;

    if (config?.fields) {
      for (let field in config?.fields) {
        const field_config = config.fields[field];
        let field_expand = global_expand;
        if (field_config.expand !== undefined) {
          field_expand = field_config.expand;
        }

        if (!this.config.fields) {
          this.config.fields = {};
        }

        this.config.fields[field] = {
          boost: (field_config.boost || field_config.boost === 0) ? field_config.boost : 1,
          bool: field_config.bool || global_bool,
          expand: field_expand
        };
      }
    } else {
      this.addAllFields2UserConfig(global_bool, global_expand, fields);
    }
  }

  /**
   * Add all fields to user search configuration.
   */
  private addAllFields2UserConfig(bool: 'AND' | 'OR', expand: boolean, fields: (keyof T)[]) {
    if (!this.config.fields) {
      this.config.fields = {};
    }

    for (let field of fields) {
      this.config.fields[field] = {
        boost: 1,
        bool: bool,
        expand: expand
      };
    }
  }
}
