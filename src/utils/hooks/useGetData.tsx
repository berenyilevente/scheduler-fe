import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';

interface RefreshTypes {
  createSuccess?: boolean;
  deleteSuccess?: boolean;
  patchSuccess?: boolean;
  refresh?: any;
}

export function useGetData(
  action: (dispatch: Dispatch<AnyAction>) => void,
  refresh: RefreshTypes
): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(action);
  }, [
    dispatch,
    refresh.createSuccess,
    refresh.deleteSuccess,
    refresh.patchSuccess,
    refresh.refresh,
  ]);
}
