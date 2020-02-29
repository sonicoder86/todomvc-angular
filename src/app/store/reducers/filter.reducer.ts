import { createReducer, on } from '@ngrx/store';
import { FILTERS } from '../../constants/filter';
import { onFilterSelect } from '../actions/filter.action';

export const createFilterReducer = (initialState: string = FILTERS.all) =>
  createReducer(
    initialState,
    on(onFilterSelect, (state: string, { filter }) => {
      return filter;
    })
  );
