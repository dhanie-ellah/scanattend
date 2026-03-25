import CreateEvent from "./createEvent";
import QRPreview from "./qrpreview";

export default function ModalProvider() {
  return (
    <>
      <QRPreview />
      <CreateEvent />
    </>
  );
}
