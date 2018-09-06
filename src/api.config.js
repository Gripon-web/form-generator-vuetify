
export const Api = ({ dataResponse, gql, variables }) => {
  return new Promise((resolve, reject) => {
    // graphqlClient.mutate({
    //   mutation: gql,
    //   variables: variables
    // })
    //   .then(response => {
    //     const { data, errors } = response
    //     if (errors) {
    //       const errorsData = errors[0].data
    //       const keys = Object.keys(errorsData)

    //       let newErrors = {}
    //       for (let key in keys) {
    //         const { field, message } = errorsData[key]
    //         newErrors[field] = message
    //       }
    //       reject(newErrors)
    //     } else {
    //       resolve(data[dataResponse])
    //     }
    //   })
  })
}
