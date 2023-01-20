import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';

interface RefreshTypes {
  createSuccess?: boolean;
  deleteSuccess?: boolean;
  patchSuccess?: boolean;
}

export function useGetData(
  action: (dispatch: Dispatch<AnyAction>) => void,
  createSuccess?: boolean,
  deleteSuccess?: boolean,
  patchSuccess?: boolean
): void {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action);
  }, [dispatch, createSuccess, deleteSuccess, patchSuccess]);
}
