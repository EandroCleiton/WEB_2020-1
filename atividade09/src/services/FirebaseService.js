export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('disciplinas')
        ref.onSnapshot((query) => {
            let disciplinas = []

            query.forEach((doc) => {
                const { nomeDisciplina, curso, capacidade } = doc.data()
                disciplinas.push({
                    _id: doc.id,
                    nomeDisciplina,
                    curso,
                    capacidade
                })
            })
            callback(disciplinas)
        })

    }

    static delete = (firestore, callback, id) => {

        firestore.collection('disciplinas').doc(id).delete()
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('nok')
                }
            )
    }

    static create = (firestore, callback, disciplina) => {

        firestore.collection('disciplinas').add(
            {
                nomeDisciplina: disciplina.nomeDisciplina,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade
            }
        )
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('nok')
                }
            )
    }

    static retrieve = (firestore, callback, id) => {

        firestore.collection('disciplinas').doc(id).get()
            .then((doc) => {
                const disciplina = {
                    nomeDisciplina: doc.data().nomeDisciplina,
                    curso: doc.data().curso,
                    capacidade: doc.data().capacidade
                }
                callback(disciplina)
            })
            .catch(error => callback(null))

    }

    static edit = (firestore, callback, id, disciplina) => {

        firestore.collection('disciplinas').doc(id).set({
            nomeDisciplina: disciplina.nomeDisciplina,
            curso: disciplina.curso,
            capacidade: disciplina.capacidade
        })
            .then(() => {
                callback('ok')
            })
            .catch(() => {
                callback('ok')
            });
    }
}