import { createReducer, on } from '@ngrx/store';
import { FILTERS } from '../../constants/Filters';
import { onFilterSelect } from '../actions/filter.actions';

export const filterReducer = createReducer(
  FILTERS.all,
  on(onFilterSelect, (state: string, { filter }) => {
    return filter;
  })
);
