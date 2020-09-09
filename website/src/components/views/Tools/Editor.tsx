import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import Button from '@material-ui/core/Button'
import React from 'react';

export default function Editor() {

  return (
      <div>
        <RichTextEditorComponent id="defaultRTE" name="defaultRTE" className="form-control" height={200} showCharCount={true} maxLength={100} placeholder={'Type something'} value={''}>
          <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Count]} />
        </RichTextEditorComponent>
      </div>
  );
}