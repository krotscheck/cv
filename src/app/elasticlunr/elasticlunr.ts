/*
 * Copyright (c) 2019. Michael Krotscheck, all rights reserved.
 */
import { ElasticLunrIndex } from './elasticlunr.index';


/**
 * The convenience constructor, used for configuration.
 */
export type ElasticLunr<T> = (config?: (index: ElasticLunrIndex<T>) => void) => ElasticLunrIndex<T>;


