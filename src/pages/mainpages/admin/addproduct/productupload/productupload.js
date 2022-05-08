import React, { useCallback, useMemo } from 'react';
import { Upload } from 'react-bootstrap-icons';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 10,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fff',
  boxShadow: '0 0 7px #ccc',
  color: '#bdbdbd',
  marginTop: '10px',
  transition: 'border .3s ease-in-out',
  textAlign: 'center',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const ProductUpload = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <Upload size={22} style={{ marginBottom: '16px' }} />
      <div>Drag and drop your images here.</div>
    </div>
  );
};

export default ProductUpload;
