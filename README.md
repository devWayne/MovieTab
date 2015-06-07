MovieTab.rc [![Build Status](https://travis-ci.org/devWayne/MovieTab.rc.svg?branch=master)](https://travis-ci.org/devWayne/MovieTab.rc)
============
> ReactComponent MovieTab

##Usage

```
var React = require('React'),
    MovieTab = require('movietab.rc');

/**
 * Use As UI Template 
 */
var movieInfo1 = { },movieInfo2 = {}, movieInfo3 = {}, movieInfo4 ={};
var movieList = [ movieInfo1,movieInfo2,movieInfo3,movieInfo4 ];

//insert into body
React.render( <Menu data={urlList}, document.body/>


/**
 * Use As Widget
 */
var MTWrapper = MovieTab.Wrapper;
var mapi = 'http://app.movie.dianping.com/yourbiz.bin';
//insert into body
React.render(<MTWrapper url="mapi"/>, document.body);

```

##API

### Wrapper

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>mapi url corresponding to current Tab</td>
      </tr>
    </tbody>
</table>


### MovieTab

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>data</td>
          <td>List</td>
          <th></th>
          <td>List of Objects for inner moivetab </td>
      </tr>
    </tbody>
</table>

### MainTab

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>href</td>
      </tr>
      <tr>
          <td>Flag</td>
          <td>Int</td>
          <th></th>
          <td>Movie status</td>
      </tr>
      <tr>
          <td>Movie</td>
          <td>Object</td>
          <th></th>
          <td>Info Object contains Name(string),Grade(int) and LargeImage(string)</td>
      </tr>
    </tbody>
</table>

### SubTab

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>href</td>
      </tr>
      <tr>
          <td>Flag</td>
          <td>Int</td>
          <th></th>
          <td>Movie status</td>
      </tr>
      <tr>
          <td>Movie</td>
          <td>Object</td>
          <th></th>
          <td>Info Object contains Name(string),Grade(int) and Image(string)</td>
      </tr>
    </tbody>
</table>



