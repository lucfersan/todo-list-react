import { createContext, ReactNode, useCallback, useState } from 'react';

import TodoModal from '../components/Modal';

interface ModalProps {
  children: ReactNode;
}

interface ModalContextData {
  openModal: (id: number, name: string) => void;
  closeModal: () => void;
  placeholder: string;
  id: number;
}

export const ModalContext = createContext<Partial<ModalContextData>>({});

export function ModalProvider({ children, ...rest }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [id, setId] = useState(0);

  const openModal = useCallback((id, name) => {
    setIsModalOpen(true);
    setPlaceholder(name);
    setId(id);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        placeholder,
        id,
      }}
    >
      {children}

      {isModalOpen && <TodoModal />}
    </ModalContext.Provider>
  );
}
