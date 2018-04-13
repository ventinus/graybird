import React, {PureComponent, Fragment} from 'react'
import {Button} from 'mdbreact'

export default class FileInput extends PureComponent {
  render() {
    return (
      <div class="file-field">
        <Button color="primary" size="sm">
          <Fragment>
            <span>Choose file</span>
            <input type="file" />
          </Fragment>
        </Button>

        <div class="file-path-wrapper">
          <input class="file-path validate valid" type="text" placeholder="Upload your file" />
        </div>
      </div>
    )
  }
}
