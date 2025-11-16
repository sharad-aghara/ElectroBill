export function makeCRUD<TModel, TCreate, TUpdate>(model: any) {
    return {
        list: async () : Promise<TModel[]> => {
            return model.findMany();
        },

        create: async (data: TCreate) : Promise<TModel> => {
            return model.create({ data });
        },

        update: async (id: string, payload: TUpdate) : Promise<TModel> => {
            return model.update({
                where: { id },
                payload
            })
        },

        delete: async (id: string) : Promise<TModel> => {
            return model.delete({
                where: { id }
            })
        }
    }
}