import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { RootRef } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: 445.75,
    padding: 20,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  },
  imgPreview: {
    maxWidth: "100%"
  }
});

function MyDropzone(prop) {
  const [preview, setpreview] = useState([]);
  const onDrop = useCallback(files => {
    setpreview(Object.assign(files[0], {
      previewUrl: URL.createObjectURL(files[0])
    }));
    prop.resolve(files);
  }, [])
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } = useDropzone({
    onDrop, accept: 'image/png,image/gif,image/jpg,image/jpeg,image/svg', maxFiles: 1
  });
  const { ref, ...rootProps } = getRootProps();
  const { classes } = prop;

  return (
    <RootRef rootRef={ref}>
      <div {...getRootProps()} className={classes.root}>
        <input {...getInputProps()} />
        {
          acceptedFiles.length ?
            <img
              src={preview.previewUrl}
              alt="Recipe"
              className={classes.imgPreview}
            /> : (
              isDragReject ?
                <p>File cannot be used</p> :
                (isDragActive ?
                  <p>Drop the files here ...</p> :
                  <div>
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                  </div>
                )
            )
        }
      </div>
    </RootRef>
  )
}

export default withStyles(styles, { withTheme: true })(MyDropzone);