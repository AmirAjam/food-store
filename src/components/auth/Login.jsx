import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Login = ({isOpenLogin , setIsOpenLogin}) => {
  return (
    <Dialog open={isOpenLogin} onOpenChange={() => setIsOpenLogin(false)}>
      <form>
        <DialogTrigger asChild>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
            </div>
            <div className="grid gap-3">
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default Login