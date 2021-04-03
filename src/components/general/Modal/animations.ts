import { useSpring } from 'react-spring';

export const modalAnimation = (openModal: boolean) => {
  const showHideModal = useSpring({
    to: async (next: any) => {
      if (openModal) {
        await next({ display: 'flex' });
        await next({ opacity: 1 });
      } else {
        await next({ opacity: 0 });
        await next({ display: 'none' });
      }
    },
    from: { opacity: 0, display: 'none' },
    config: { duration: 200 },
  });

  return showHideModal;
};
