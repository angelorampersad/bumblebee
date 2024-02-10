import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function ChangeLog() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src="/avatars/01.png" alt="Avatar" /> */}
            <AvatarFallback>BW</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Bruce Wayne</p>
            <p className="text-sm text-muted-foreground">
              bruce.wayne@justeattakeaway.com
            </p>
          </div>
          <div className="ml-auto font-medium">Event Removed</div>
        </div>
        <div className="flex items-center">
          <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            {/* <AvatarImage src="/avatars/02.png" alt="Avatar" /> */}
            <AvatarFallback>BW</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Bruce Wayne</p>
            <p className="text-sm text-muted-foreground">
              bruce.wayne@justeattakeaway.com
            </p>
          </div>
          <div className="ml-auto font-medium">Event Disabled</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src="/avatars/03.png" alt="Avatar" /> */}
            <AvatarFallback>BW</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Bruce Wayne</p>
            <p className="text-sm text-muted-foreground">
              bruce.wayne@justeattakeaway.com
            </p>
          </div>
          <div className="ml-auto font-medium">Event Added</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src="/avatars/04.png" alt="Avatar" /> */}
            <AvatarFallback>CK</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Clark Kent</p>
            <p className="text-sm text-muted-foreground">clark.kent@justeattakeaway.com</p>
          </div>
          <div className="ml-auto font-medium">Integration Added</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src="/avatars/05.png" alt="Avatar" /> */}
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Diana Prince</p>
            <p className="text-sm text-muted-foreground">diana.prince@justeattakeaway.com</p>
          </div>
          <div className="ml-auto font-medium">User Added</div>
        </div>
      </div>
    )
  }