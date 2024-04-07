export const handPost = ((data) => {
    // const postData = usePostStore();
    // const dataPost = postData.post_Data
    // console.log("DATA POST HANDLE", data.to);
    let post_open = ""
    let choise = data.to
    let post = data.post
    if (!post || !choise) {
        return {
            message: "une erreur à eue lieu"
        }
    }
    if (choise == "upOpen") {
        post_open =  toUpOpen(post)
    }
    if (choise == "downOpen") {
        post_open = toUpOpen(post).reverse()
    }
    if (choise == "upRead") {
        post_open = toUpRead(post)
    }
    if (choise == "downRead") {
        post_open = toUpRead(post).reverse()
    }
    if (choise == "upDate") {
        post_open = toUpDate(post)
    }
    if (choise == "downDate") {
        post_open = toUpDate(post).reverse()
    }

    return post_open
})

const toUpOpen = ((p) => {
    // console.log("TO UP OPEN", p);
    let post_open = p.sort(function (x, y) {
        return y.postOpened - x.postOpened;
    })
    return post_open
})
const toUpRead = ((p) => {
    //  console.log("TO UP READ",p);
    let post_read = p.sort(function (x, y) {
        return y.postRead - x.postRead;
    })
    //  console.log("DATA UPREAD",post_read);
    return post_read
})
const toUpDate = ((p) => {
    //  console.log("TO UP READ",p);
    let post_date = p.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
     console.log("DATA UPREAD",post_date);
    return post_date
})