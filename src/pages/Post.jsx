import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
// import { fetchPost } from "../api";
import {getPostSuccess} from '../store/postSlice'


export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.auth.userData);

    // const newNumber  = post.$permissions.map((data)=>data.split(":")[1].replace('")',''))
    // const finalNumber = newNumber[1]
    const isAuthor = post && userData ? post.$permissions.includes(`read("user:${userData.$id}")`) : false; // amazing logic here

    useEffect(() => {
        if (slug) {
            const post = appwriteService.getPost(slug)
            post.then((post) => {
                if (post){
                    setPost(post);
                    dispatch(getPostSuccess(slug))
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate,dispatch]);

    // useEffect(() => {
    //     if (slug) {
    //       dispatch(fetchPost(slug)).then(() => {
    //         // Post fetched and Redux state updated
    //         if (post) setPost(post);
    //       }).catch(() => {
    //         navigate("/");
    //       });
    //     } else {
    //       navigate("/");
    //     }
    //   }, [slug, dispatch, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}