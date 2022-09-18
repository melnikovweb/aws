import classnames from 'classnames'

const UploadFile = ({ className, id }) => {
  return (
    <div className={classnames(className, 'upload-file')}>
      <div className="upload-file-field">
        <span>Drop your files here or</span>
        <label htmlFor={id}>Browse on your PC</label>
        <input id={id} type="file" name="file" multiple />
      </div>
      <div className="upload-file-desc">
        File size limit (20Mb). You can drop next formats: doc. docx. pdf. ppt.
        pptx
      </div>
    </div>
  )
}

export default UploadFile
