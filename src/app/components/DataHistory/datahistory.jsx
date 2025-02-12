import React from "react";

export function DataHistory() {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table id="mainTable" class="table table-striped" style={{cursor:'pointer'}}>
                        <thead>
                            <tr><th>#</th>
                                <th>Name</th>
                                <th>Property Name</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Brokerage</th>
                                <th>Total</th>
                            </tr></thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Bunglows</td>
                                <td>98523</td>
                                <td>02-2018</td>
                                <td>Lorem ipsum dolor sit amet.</td>
                                <td>$380</td>
                                <td>$380</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Flat</td>
                                <td>35820</td>
                                <td>02-2018</td>
                                <td>Lorem ipsum dolor sit amet.</td>
                                <td>$50</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Shop</td>
                                <td>25846</td>
                                <td>02-2018</td>
                                <td>Lorem ipsum dolor sit amet.</td>
                                <td>$80</td>
                                <td>$80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}