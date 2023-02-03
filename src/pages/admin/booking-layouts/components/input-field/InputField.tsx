import { Icon } from '@/components';
import i18n from '@/translations';
import { GetBookingLayoutArgs, GetInputArgs, getTranslation } from '@/utils';
import React from 'react';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import EditInputField from '../edit-input-field/EditInputField';

export interface InputFieldProps {
  bookingLayout: GetBookingLayoutArgs;
  editInputFields: GetInputArgs[] | null;
  isEdit: boolean;
  editSingleInputId: string | null;
  onRemoveInput: (field: GetInputArgs) => void;
  onEditSingleInput: (inputId: string) => void;
  setEditInputFields: (editedInputs: GetInputArgs[]) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  bookingLayout,
  editInputFields,
  isEdit,
  editSingleInputId,
  onRemoveInput,
  onEditSingleInput,
  setEditInputFields,
}) => {
  function getInputFields(): GetInputArgs[] {
    if (editInputFields === null) {
      console.log('bookingLayout inputs');

      return bookingLayout.inputs;
    }
    console.log('editedInputs');

    return editInputFields;
  }

  function onDragEnd(result: DropResult): void {
    const { destination, source, draggableId } = result;
    if (
      editInputFields === null ||
      destination === null ||
      destination === undefined ||
      isEdit === false
    ) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newEditInputList = [...editInputFields];
    const [removedItem] = newEditInputList.splice(source.index, 1);
    newEditInputList.splice(destination.index, 0, removedItem);
    setEditInputFields(newEditInputList);
  }

  return (
    <>
      {bookingLayout.inputs.length !== undefined ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="input-item">
            {(provided: DroppableProvided) => (
              <div
                className="input-item"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {getInputFields().map((inputField, index) => (
                  <Draggable
                    key={inputField._id}
                    draggableId={inputField._id!}
                    index={index}
                    isDragDisabled={!isEdit}
                  >
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="border border-slate-100 p-4 rounded-md my-4"
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center gap-6">
                            <Icon iconType="list" />
                            <div>
                              <p className="font-semibold">
                                {getTranslation(
                                  'inputFields',
                                  inputField.inputType,
                                  i18n
                                )}
                              </p>
                              <p className="text-sm">
                                {'label: ' + inputField.label}
                              </p>
                            </div>
                          </div>

                          {isEdit === true && (
                            <div className="flex gap-x-3 items-center">
                              <Icon
                                iconType={'edit'}
                                onClick={() =>
                                  onEditSingleInput(inputField._id!)
                                }
                              />
                              <Icon
                                iconType="remove"
                                onClick={() => onRemoveInput(inputField)}
                              />
                            </div>
                          )}
                        </div>
                        {editSingleInputId === inputField._id && (
                          <EditInputField />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <span>No input fields added.</span>
      )}
    </>
  );
};
