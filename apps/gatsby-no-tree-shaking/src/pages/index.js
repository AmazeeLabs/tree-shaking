import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import _ from "lodash"

const items = Array.from({
  length: 1000
}).map((_, index) => index);

const getTotal = (items) => _.reduce(items, (total, item) => {
  total += item
  return total
}, 0);

const SecondPage = () => (
  <Layout>
    <SEO title="No tree shaking" />
    <h1>No tree shaking</h1>
    <p>Result is {getTotal(items)}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
