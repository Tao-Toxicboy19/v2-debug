import { WsJwtGuard } from '@app/common'
import { Socket } from 'socket.io'

type SocketIOMiddleware = {
    (client: Socket, next: (err?: Error) => void)
}

export function SocketAuthMiddleware(): SocketIOMiddleware {
    return (client, next) => {
        try {
            WsJwtGuard.validateToken(client)
            next()
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
