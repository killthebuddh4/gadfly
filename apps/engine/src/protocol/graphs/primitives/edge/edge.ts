import { prisma } from "../../../../lib/prisma.js";

export const read = async ({ id }: { id: string }) => {
  return prisma.edge.findUnique({
    where: {
      id,
    },
  });
};

export const setTo = async ({ id, to }: { id: string; to: string }) => {
  return prisma.edge.update({
    where: {
      id,
    },
    data: {
      to: {
        connect: {
          id: to,
        },
      },
    },
  });
};

export const setValue = async ({
  id,
  value,
}: {
  id: string;
  value: string;
}) => {
  return prisma.edge.update({
    where: {
      id,
    },
    data: {
      value: {
        connect: {
          id: value,
        },
      },
    },
  });
};

// router.get("/:id", async (req, res) => {
//   const params = zGetParams.parse(req.params);

//   const data = await prisma.edge.findUnique({
//     where: {
//       id: params.id,
//     },
//   });

//   res.json({ ok: true, data });
// });

// const zCreateBody = z.object({
//   graph: z.string().uuid(),
//   from: z.string().uuid(),
//   type: z.string().uuid(),
//   operation: z.string().uuid(),
// });

// router.post("/", async (req, res) => {
//   const body = zCreateBody.parse(req.body);

//   const data = await prisma.edge.create({
//     data: {
//       graph: {
//         connect: {
//           id: body.graph,
//         },
//       },
//       from: {
//         connect: {
//           id: body.from,
//         },
//       },
//       type: {
//         connect: {
//           id: body.type,
//         },
//       },
//       operation: {
//         connect: {
//           id: body.operation,
//         },
//       },
//     },
//   });

//   res.json({ ok: true, data });
// });

// const zSetToParams = z.object({
//   id: z.string().uuid(),
// });

// const zSetToBody = z.object({
//   to: z.string().uuid(),
// });

// router.post("/:id/to", async (req, res) => {
//   const params = zSetToParams.parse(req.params);
//   const body = zSetToBody.parse(req.body);

//   const data = await prisma.edge.update({
//     where: {
//       id: params.id,
//     },
//     data: {
//       to: {
//         connect: {
//           id: body.to,
//         },
//       },
//     },
//   });

//   res.json({ ok: true, data });
// });

// const zSetValueParams = z.object({
//   id: z.string().uuid(),
// });

// const zSetValueBody = z.object({
//   value: z.string().uuid(),
// });

// router.post("/:id/value", async (req, res) => {
//   const params = zSetValueParams.parse(req.params);
//   const body = zSetValueBody.parse(req.body);

//   const data = await prisma.edge.update({
//     where: {
//       id: params.id,
//     },
//     data: {
//       value: {
//         connect: {
//           id: body.value,
//         },
//       },
//     },
//   });

//   res.json({ ok: true, data });
// });
