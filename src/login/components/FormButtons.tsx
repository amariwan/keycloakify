import { CancelButton, SubmitButton } from "@/components/ui/button";

interface propsBtn {
  id?: string;
  label?: string;
  value?: string;
  name?: string;
  isVisible?: boolean;
  className?: string;
  onClick?: () => void;
}

interface ConfirmationActionsProps {
  confirmProps?: propsBtn;
  cancelProps?: propsBtn;
  showCancel?: boolean;
  className?: string;
  actionUrl: string;
  method: string;
}

export const ConfirmationActions: React.FC<ConfirmationActionsProps> = (
  props: ConfirmationActionsProps
) => {
  const { confirmProps, cancelProps, className, actionUrl, method } = props;
  return (
    <form
      className={`form-actions flex flex-col md:flex-row gap-4 w-full ${className}`}
      action={actionUrl}
      method={method}
    >
      {confirmProps && confirmProps.isVisible && (
        <SubmitButton
          id={confirmProps.id}
          name={confirmProps.name || confirmProps.id}
          value={confirmProps.value || confirmProps.label}
          className={`w-full ${confirmProps.className}`}
          onClick={confirmProps.onClick}
          type="submit"
        >
          {confirmProps.label}
        </SubmitButton>
      )}

      {cancelProps && cancelProps.isVisible && (
        <CancelButton
          id={cancelProps.id}
          name={cancelProps.name || cancelProps.id}
          value={cancelProps.value || cancelProps.label}
          className={`w-full ${cancelProps.className}`}
          onClick={cancelProps.onClick}
          type="button"
          variant="secondary"
        >
          {cancelProps.label}
        </CancelButton>
      )}
    </form>
  );
};
