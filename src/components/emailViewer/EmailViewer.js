import React from 'react'
import { loadMsgFiles } from '../../utils/Api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './emailViewer.scss'

function EmailViewer() {
  // Better than Redux - React Hooks.
  const [emailFiles, setEmailFiles] = React.useState([])
  const [showEmail, setShowEmail] = React.useState(-1)

  React.useEffect(() => {
    loadMsgFiles(setEmailFiles)
  }, [])

  return (
    <div className="email-viewer">
      <h1>Email Viewer</h1>
      <div className="email-table email-header">
        <div>From:</div>
        <div>To:</div>
        <div>Subject:</div>
        <div>Sent Date:</div>
        <div>Operations:</div>
      </div>
      {emailFiles.map((ef, i) => (
        <div className="email-table email-body" key={"key" + i}>
          <div>{ef.From}</div>
          <div>{ef.To}</div>
          <div>{ef.Subject}</div>
          <div>{ef.Date}</div>
          <div className="operation-icons">
            <FontAwesomeIcon
              className="open-icon"
              icon={faEnvelopeOpen}
              onClick={() => {
                setShowEmail(i)
              }}
            />
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTimesCircle}
              onClick={() => setEmailFiles(emailFiles.filter((e, j) => j != i))}
            />
          </div>
        </div>
      ))}
      {showEmail >= 0 && (
        <div className="shown-email">
          <div className="close-btn" onClick={() => setShowEmail(-1)}>X</div>
          <div dangerouslySetInnerHTML={{ __html: emailFiles[showEmail].Body }}></div>
        </div>
      )}
    </div>
  )
}

export default EmailViewer