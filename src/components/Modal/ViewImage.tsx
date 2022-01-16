import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderBottomRadius={50}
        width="auto"
        height="auto"
        maxWidth="900px"
        maxHeight="600px"
      >
        <ModalBody padding="0">
          <Image maxWidth="900px" maxHeight="600px" src={imgUrl} />
        </ModalBody>
        <ModalFooter
          p="3"
          borderBottomRadius={6}
          justifyContent="flex-start"
          h="2rem"
          bgColor="pGray.800"
        >
          <Link color="pGray.50" fontSize="14px" href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
