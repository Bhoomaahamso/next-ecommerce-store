"use client";

import usePreviewStore from "@/hooks/use-preview";
import Modal from "./Modal";
import Gallery from "./Gallery";
import Info from "./Info";
import { useEffect, useState } from "react";

const PreviewModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  const previewModal = usePreviewStore();
  const product = usePreviewStore((state) => state.data);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};
export default PreviewModal;
