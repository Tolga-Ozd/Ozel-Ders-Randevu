import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from "react"

function AddModal({ show, handleClose, apps, setApps, drName }) {
  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const handleSubmit = (e) => {
    e.preventDefault()
    setApps([ 
      ...apps,
      {
        id: new Date().getTime(),
        patient: name,
        day: date,
        tamamlandı: false,
        teacher: drName,
      },
    ])
    setName("")
    handleClose()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Öğretmen : {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Öğrenci Adı Giriniz</Form.Label>
              <Form.Control
                type="text"
                placeholder="Öğrenci Adı "
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Tarih Seçiniz</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tarih"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Kaydet
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Kapat
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddModal
