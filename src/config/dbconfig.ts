import { connect, connection } from "mongoose";

export const dbConnection = {
    default: async () => {
        const db = await connect("mongodb+srv://Rodrigo03:kz8qMQrbpdnp4KYh@freecluster.dw9jl.mongodb.net/finances")
        console.log(`Database connected: ${db.connection.name}`);
    }
}
