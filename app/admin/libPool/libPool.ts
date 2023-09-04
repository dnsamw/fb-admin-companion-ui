import { database } from "@firebase";
import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";

export const fetchPaginatedData = async (entity_object) => {
  const {
    collection: collectionName,
    records_limit,
    pageAction,
    page,
    fields,
    orderByField,
    orderByOrder,
    whereFields,
    lastIndex: afterThis,
    firstIndex: beforeThis,
  } =entity_object


  const collectionRef =collection(database,collectionName)
  let queryRef=query(collectionRef)

  if (whereFields && whereFields.length>0){
    whereFields.forEach(whereObj => {
        queryRef =query(query(queryRef,where(whereObj.name,"===",whereObj.value)))
    });
  }

  if (page>1) {
    if (pageAction==="NEXT") {
        queryRef =query(collectionRef,orderBy(orderByField,orderByOrder),startAfter(afterThis),limit(records_limit))
        
    }

    if (pageAction==="PREVIOUS") {
        queryRef =query(collectionRef,orderBy(orderByField,orderByOrder),startAfter(beforeThis),limit(records_limit))
        
    }
  }
  else {
 queryRef =query(collectionRef,orderBy(orderByField,orderByOrder),limit(records_limit))    
}




const querySnapshot = await getDocs(queryRef)

const records =querySnapshot.docChanges.map(doc=>{
    const record =doc.data()

    const filteredRecord =Object.keys(fields).reduce((obj,field)=>{
        obj[field]=record[field]
        return obj
    },{})
    return filteredRecord
})

return records
};


// const fetchData= async()=>{

//     const pageSize =2
  
//     const entityObject={
//       collection:"Post-Pool",
//       records_limit:pageSize,
//       pageAction:pageAction,
//       page:page,
//       fields:{
//         subject:true,
//         created_at:true,
//         status:true
//       },
//       orderByField:'created_at',
//       orderByOrder:'desc',
//       lastIndex:afterThis,
//       firstIndex:beforeThis,
//       whereFields:[
//         {
//           name:'entity_type',
//           value:'Group'
//         },{
//           name:'entity_id',
//           value:5
//         }
//       ]
  
//     }
  
  
//     try {
//       const records = await fetchPaginatedData(entityObject)
  
//       if (records?.length>0) {
//         const last_index =records.length -1
//         const first_index =0
  
//         setAfterThis(records[last_index][entityObject.orderByField])
//         setBeforeThis(records[first_index][entityObject.orderByField])
//         setPostPoolData(records)
//       }
//     } catch (error) {
//       console.log(error);
      
//     }
//   }


// const nextPage = async (val: number) => {
//     console.log(val);
    
//     const postsRef = collection(database, "Post-Pool");
//     const q = query(
//       postsRef,
//       orderBy("uuid", "desc"),
//       startAfter(val), // Pass the reference
//       limit(itemsPerPage)
//     );
//     const documents = await getDocs(q);
//     updateState(documents);
//   };
