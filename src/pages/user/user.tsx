import { Button, Card, Divider } from '@/components';
import { PublicRouteUrl } from '@/utils';
import React, { useRef, useState } from 'react';

export interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const [exportedButton, setExportedButton] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLDivElement>(null);

  function onExport() {
    setExportedButton(
      `<a
          href={http://127.0.0.1:5173${PublicRouteUrl.NewBooking}63e2549fc3c75c3dd3047bd5}
          target="_blank">
          Create a booking
        </a>`
    );
  }

  function copyToClipboard(e: any): void {
    if (textAreaRef.current === null) {
      return;
    }
    const range = document.createRange();
    range.selectNode(textAreaRef.current);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand('copy');
    setIsCopied(true);
    window.getSelection()?.removeAllRanges();
    e.target.focus();
  }

  //This will be a button, which has all the information to take the user to the booking page, eg.: the id of the booking
  //The button will be exported and implemented on the users page
  //TODO move the logic into a separate component
  return (
    <div className="grid place-content-center mt-96 gap-y-4 ">
      <Button variant="filled">
        <a
          href={`${PublicRouteUrl.NewBooking}63e3fab457047c8877e69bc6`}
          target="_blank"
        >
          Create a booking
        </a>
      </Button>
      <Button variant="outline" onClick={onExport}>
        Export button
      </Button>
      {exportedButton && (
        <Card>
          <div className="grid gap-y-1">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Exported button</h2>
              <Button
                variant="outline"
                className="text-xs px-2 gap-x-1 py-0"
                onClick={copyToClipboard}
                iconType={isCopied ? 'done' : 'copy'}
              >
                {isCopied ? 'Copied ' : 'Copy'}
              </Button>
            </div>
            <p className="pt-2 text-sm w-[300px]">
              Embed this snippet in your website. Clicking on this link will
              take your clients to your specified booking layout.
            </p>

            <Divider />
            <div className="w-[280px] text-sm font-mono" ref={textAreaRef}>
              {exportedButton}
            </div>
            <Divider />
          </div>
        </Card>
      )}
    </div>
  );
};
