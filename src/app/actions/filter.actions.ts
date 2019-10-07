import { createAction, props } from '@ngrx/store';
import { ACTION_TYPES } from '../constants/ActionTypes';

export const selectFilterAction = createAction(
  ACTION_TYPES.selectFilter,
  props<{ filter: string }>()
);
