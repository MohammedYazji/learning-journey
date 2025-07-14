class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // BASIC FILTERING
    // make a shallow copy as a new object
    const queryObj = { ...this.queryString };
    // make an array to remove all these from query if exist
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // console.log(req.query, queryObj);

    // ADVANCED FILTERING
    // What I did in mongo was
    // {difficulty: 'easy', {duration: {$gte: 5}}}
    // but the query in request will came as
    // {difficulty: 'easy', {duration: {gte: '5'}}}
    // so we need to add the $, before gt, gte, lt, lte
    let queryStr = JSON.stringify(queryObj);
    // using regular expression
    // \b to search exactly on these characters
    // g flag to replace many of them is exist not just one
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    queryStr = JSON.parse(queryStr);
    console.log(queryStr);

    this.query.find(queryStr);
    // let query = Tour.find(queryStr);
    return this; // return the object to access methods by chaining
  }

  sort() {
    // SORTING
    // if there is sort property in the query
    if (this.queryString.sort) {
      // so to remove the , and replace it with a space so convert it to array then make it string again with ' '
      const sortBy = this.queryString.sort.split(',').join(' ');
      console.log(sortBy);
      // here we must before build the query then execute it becaause we need to access the query methods like sort
      this.query = this.query.sort(sortBy);
      // add another creteria to sort if the price is the same in two document
      // query.sort('price, ratingsAverage')
    } else {
      // default sorting if there is not sort query
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    // 3) FIELD LIMITING
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      // must change from , to ' ' to pass to select method
      this.query = this.query.select(fields);
      // query.select('name duration price')
    } else {
      // if there is no specific fields want to return
      // remove __v from the documents by use - => exclude them
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    // Pagination

    // take the page from client or if not exist by default 1
    const page = this.queryString.page * 1 || 1;
    // take the limit from client or if not exist by default 100
    const limit = this.queryString.limit * 1 || 100;
    // to skip all documents before this page
    const skip = (page - 1) * limit;

    // page=2&limit=10 => 1-10 page1, 11-20 page2, 21-30 page3 ...
    // so we need to skip 10 [The First page] (2 - 1) * 10
    // and put limit as 10 documents in the second page
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
