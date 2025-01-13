import { Button } from "../ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import "../ui/style.css";
export default function DeleteConfirmModal() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="btn-dlt">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete user?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>This action cant be Unchanged. Want to delete this user?</p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <DialogActionTrigger asChild>
            <Button className="btn-dlt">Delete</Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
