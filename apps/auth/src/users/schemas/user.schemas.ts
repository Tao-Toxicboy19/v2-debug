import { AbstractDocument } from '@app/common'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({ versionKey: false })
export class User extends AbstractDocument {
    @Prop()
    _id: Types.ObjectId

    @Prop()
    username: string

    @Prop()
    password: string

    @Prop({ required: true })
    email: string

    @Prop()
    name?: string

    @Prop()
    picture?: string

    @Prop()
    googleId?: string

    @Prop()
    resetPasswordToken?: string | null

    @Prop()
    resetPasswordExpires?: Date | null

    @Prop({ default: Date.now, required: false })
    createdAt?: Date

    @Prop({ required: false })
    updatedAt?: Date

    @Prop({ required: false })
    daletedAt?: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
