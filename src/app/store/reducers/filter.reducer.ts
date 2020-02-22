import { createReducer, on } from '@ngrx/store';
import { FILTERS } from '../../constants/Filters';
import { onFilterSelect } from '../actions/filter.actions';

export const createFilterReducer = (initialState: string = FILTERS.all) =>
  createReducer(
    initialState,
    on(onFilterSelect, (state: string, { filter }) => {
      return filter;
    })
  );
